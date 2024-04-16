#!/bin/bash

# Vérification du nombre d'arguments
if [ $# -eq 0 ]; then
    echo "Aucun argument passé au programme."
elif [ $# -gt 3 ]; then
    echo "Trop d'arguments passés au programme. Seuls les trois premiers seront affichés."
else
    # Affichage des arguments
    echo "Arguments passés au programme :"
    count=1
    for arg in "$@"; do
        if [ $count -le 3 ]; then
            echo "Argument $count : $arg"
         ((count++))
        else
            break
        fi
done
fi
