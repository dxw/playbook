#!/bin/bash
# script to test the playbook
echo "=> linting markdown..."
if bundle exec mdl -g > /dev/null .
then
  echo "No Markdown errors"
  exit 0
else
  bundle exec mdl -g . | \
    # only parse lines which have MD in them
    grep MD | \
    # make sure there isnt an extra space and then add a dash after the error code
    sed -e "s/: /:/" -e "s/MD\([0-9]*\) /MD\1 - /" | \
    # add the error again but as lower case
    awk -F: '{print $0 ":" tolower($3)}' | \
    # replace the spaces with dashes in the lowercase message and then print out
    # our friendly error message with a url
    awk -F: '{ gsub(" ","-",$4); print "There is an error in "$1" on line "$2" \""$3"\" see https://github.com/markdownlint/markdownlint/blob/master/docs/RULES.md#"$4" to fix it"}'
  exit 1
fi
