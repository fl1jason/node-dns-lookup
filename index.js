// Node.js program to demonstrate the 
// dns.lookup() method 
//dns.lookup('geeksforgeeks.org', onLookupResponse);

// Accessing dns module
const dns = require('dns');

const domain = 'fl1.digital';

// Setting options for dns.lookup() method
const options = {

    // Setting family as 6 i.e. IPv6
    family: 6,
    hints: dns.ADDRCONFIG | dns.V4MAPPED,
};

const onLookupResponse = (err, address, family) => {
    console.log('address: %j family: IPv%s', address, family);
};

//const rrtype = 'A';

dns.resolve(domain, 'A', onLookupResponse)

dns.resolve(domain, 'TXT', onLookupResponse)

dns.resolve(domain, 'MX', onLookupResponse)

dns.resolve(domain, 'NS', onLookupResponse)

