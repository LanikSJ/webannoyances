#!/usr/bin/env bash
# shellcheck disable=SC2162

FILE="$1"
LINE_NO=$2
i=1
while read line; do
    echo "$line"
    if [ "$i" -eq "$LINE_NO" ]; then
        break
    fi
    i=$(( i + 1 ))
done <"$FILE"