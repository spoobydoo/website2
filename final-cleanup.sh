#!/bin/bash
# Script to finally remove the Impotola reference

# Extract the About Me section
sed -i 's/<p class="text-lg text-gray-700">My name is George Lock. I am a recent graduate from Temple University with my Bachelors in Arts. I had recently seen the job listing for Impotola\&#x27;s marketing position, and it looked like something I would be ecstatic to work for.<\/p>/<p class="text-lg text-gray-700">My name is George Lock. I am a recent graduate from Temple University with my Bachelors in Arts.<\/p>/g' index.html

echo "Final cleanup of Impotola reference complete."
