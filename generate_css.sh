#!/bin/bash

# Get the list of components and pages
atoms=$(ls src/components/atoms)
molecules=$(ls src/components/molecules)
organisms=$(ls src/components/organisms)
templates=$(ls src/components/templates)
pages=$(ls src/pages)

# Loop over each atom
for atom in $atoms
do
  # Create the CSS file for the atom
  touch src/components/atoms/$atom/$atom.module.css
done

# Loop over each molecule
for molecule in $molecules
do
  # Create the CSS file for the molecule
  touch src/components/molecules/$molecule/$molecule.module.css
done

# Loop over each organism
for organism in $organisms
do
  # Create the CSS file for the organism
  touch src/components/organisms/$organism/$organism.module.css
done

# Loop over each template
for template in $templates
do
  # Create the CSS file for the template
  touch src/components/templates/$template/$template.module.css
done

# Loop over each page
for page in $pages
do
  # Create the CSS file for the page
  touch src/pages/$page/$page.module.css
done