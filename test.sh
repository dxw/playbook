#!/bin/bash
# script to test the playbook
echo "=> linting .travis.yml..."
bundle exec travis lint --no-interactive
echo "=> linting markdown..."
bundle exec mdl -g .
