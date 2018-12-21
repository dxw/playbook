#!/bin/bash
# script to test the playbook
echo "=> linting .travis.yml..."
bundle exec travis lint --no-interactive
echo "=> linting markdown..."
if bundle exec mdl -g > /dev/null .
then
  echo "No Markdown errors"
  exit 0
else
  bundle exec mdl -g . | \
    awk -F: '/MD/ {print $3}' | \
    sed -e "s/^ //" -e "s/MD\([0-9]*\) /MD\1 - /" | \
    tr " " "-" | \
    tr '[:upper:]' '[:lower:]' | \
    sed -e "s?^?To fix this see https://github.com/markdownlint/markdownlint/blob/master/docs/RULES.md#?"
  exit 1
fi
