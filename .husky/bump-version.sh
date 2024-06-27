#!/bin/sh

# Get the commit message
COMMIT_MSG=$(git log -1 --pretty=%B)

# Define words to identify the type of version bump
MINOR_WORDS="feat,minor"
MAJOR_WORDS="BREAKING CHANGE,major"

# Determine the version bump
if echo "$COMMIT_MSG" | grep -E "$(echo $MAJOR_WORDS | sed 's/,/|/g')"; then
    bump="major"
elif echo "$COMMIT_MSG" | grep -E "$(echo $MINOR_WORDS | sed 's/,/|/g')"; then
    bump="minor"
else
    bump="patch"
fi

# Bump the version without creating a commit or tag
npm version --silent --commit-hooks false --git-tag-version false $bump > /dev/null 2>&1

# Add the updated package.json to the commit
git add package.json