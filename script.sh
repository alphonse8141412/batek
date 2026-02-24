#!/usr/bin/env bash
set -euo pipefail

# Exécuter depuis `app-showcase-vision`
proj_dir="${1:-.}"
cd "$proj_dir"

vite_cfg="vite.config.ts"
backup="$vite_cfg.bak"
log="/tmp/vite_dev.log"
pidfile="/tmp/vite_dev.pid"

if [ ! -f "$vite_cfg" ]; then
  echo "Fichier \`$vite_cfg\` introuvable dans \`$proj_dir\`."
  exit 1
fi

echo "Recherche d'occurrences de '-tagger' dans \`$vite_cfg\`..."
grep -n --color=never -E "from\s+['\"]-tagger['\"]|['\"]-tagger['\"]" "$vite_cfg" || echo "Aucune occurrence exacte trouvée."

cp -v "$vite_cfg" "$backup"
perl -0777 -i -pe "s/(from\s+['\"])\\-([A-Za-z0-9@\/\._\-]+)(['\"])/\1\2\3/gi" "$vite_cfg"

echo "Diff (modifications appliquées) :"
git --no-pager diff -- "$vite_cfg" || true

if [ -f "package.json" ]; then
  echo "Réinstallation des dépendances (npm ci)..."
  npm ci
else
  echo "Aucun \`package.json\` trouvé, abandon."
  exit 1
fi

echo "Démarrage de \`npm run dev\` (log -> $log)..."
nohup npm run dev > "$log" 2>&1 & echo $! > "$pidfile"

sleep 5
echo "Lecture du log (dernieres lignes) :"
tail -n 200 "$log" || true

if grep -Ei -q "Local:|http://localhost|https://localhost|ready in|compiled|Vite v" "$log"; then
  echo "✔ Dev server démarré. PID -> $pidfile"
else
  echo "✖ Échec probable — voir le log ci‑dessous :"
  tail -n 200 "$log" || true
  echo "Pour stopper le processus (si lancé) : kill \$(cat $pidfile) && rm -f $pidfile"
fi
