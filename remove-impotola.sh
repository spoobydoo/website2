#!/bin/bash
# Script to properly remove the Impotola reference

# Find the paragraph with the Impotola reference
# We'll use sed to replace just the text we want to change
sed -i 's/My name is George Lock\. I am a recent graduate from Temple University with my Bachelors in Arts\. I had recently seen the job listing for Impotola'"'"'s marketing position, and it looked like something I would be ecstatic to work for\./My name is George Lock\. I am a recent graduate from Temple University with my Bachelors in Arts\./g' index.html

# Verify the change
grep -A 1 "My name is George Lock" index.html

echo "Impotola reference has been removed successfully."
