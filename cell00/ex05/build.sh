#!/bin/bash

if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    count=1
    for arg in "$@"; do
        mkdir "ex$arg"
        ((count++))
    done
fi
