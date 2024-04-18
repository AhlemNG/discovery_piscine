#!/bin/bash

# Vérification du nombre d'arguments
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
fi
    # Affichage des arguments
    count=1
    for arg in "$@"; do
        if [ $count -le 3 ]; then
            echo "$arg"
         ((count++))
        else
            break
        fi
done

