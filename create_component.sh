#!/bin/bash

# Get component name from the first argument
COMPONENT_NAME=$1

# Get component type from the second argument
COMPONENT_TYPE=$2

# Create a new directory with the component type and name
mkdir -p src/components/$COMPONENT_TYPE/$COMPONENT_NAME

# Navigate into the new directory
cd src/components/$COMPONENT_TYPE/$COMPONENT_NAME

# Create the JSX and CSS module files
echo "import React from 'react';
import styles from './$COMPONENT_NAME.module.css';

const $COMPONENT_NAME = () => (
  <div className={styles.$COMPONENT_NAME}>
    {/* Your component code here */}
  </div>
);

export default $COMPONENT_NAME;" > $COMPONENT_NAME.jsx

echo ".$COMPONENT_NAME {
  /* Add your styles here */
}" > $COMPONENT_NAME.module.css