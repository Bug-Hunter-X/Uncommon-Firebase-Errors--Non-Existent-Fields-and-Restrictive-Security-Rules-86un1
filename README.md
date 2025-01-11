# Uncommon Firebase Errors

This repository demonstrates two uncommon errors that can occur when using the Firebase SDK with Firestore:

1. **Accessing Non-Existent Fields:**  Attempting to access a field that does not exist in a Firestore document results in an error. The example shows how to gracefully handle this situation.
2. **Overly Restrictive Security Rules:** Strict security rules can prevent legitimate data access, leading to unexpected failures.  The example highlights the importance of well-defined security rules.

The `bug.js` file showcases these errors, and `bugSolution.js` presents solutions.