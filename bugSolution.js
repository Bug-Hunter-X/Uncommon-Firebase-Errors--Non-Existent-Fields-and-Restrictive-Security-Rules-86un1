To avoid errors when accessing fields, always check if the field exists before accessing it.  Use optional chaining or the `in` operator:

```javascript
db.collection('users').doc('user1').get().then(doc => {
  const data = doc.data();
  const street = data && data.address && data.address.street ? data.address.street : 'N/A';
  console.log(street);
});
```

Alternatively, use optional chaining:
```javascript
db.collection('users').doc('user1').get().then(doc => {
  console.log(doc.data()?.address?.street ?? 'N/A');
});
```

Regarding security rules, carefully review and test your rules to ensure they allow legitimate access while maintaining security.  Use the Firebase console's rules simulator to help you debug your rules. Make sure your rules are as permissive as possible while still restricting unwanted access.