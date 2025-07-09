import { Request, Transaction, CountryCode } from "@/types/type";

export const ticket = [
  {
    "id": "#23423432432",
    "title": "Having issue in Shopping",
    "date": "8 Sep 2021 08:44 PM",
    "status": {
      "text": "In Progress",
      "color": "#F4A261" 
    }
  },
  {
    "id": "#23423432432",
    "title": "My Order is not placed",
    "date": "8 Sep 2021 08:44 PM",
    "status": {
      "text": "Closed",
      "color": "#2ECC71" 
    }
  },
  {
    "id": "#23423432432",
    "title": "I am not able to logout",
    "date": "8 Sep 2021 08:44 PM",
    "status": {
      "text": "Open",
      "color": "#333333" 
    }
  }
]



// Sample data for earnings entries
export const earningsData = [
  {
    id: '1',
    pickup: "4 Lancaster Avenue",
    destination: "6th Lanest street , Texas",
    location: '4 Lancaster Avenue',
    date: '6th Lenest street, Texas',
    amount: '89',
    status: 'Earned',
  },
  {
    id: '2',
    pickup: "Olive Pancrest, LA",
    destination: "Lance Close, MN",
    location: 'Olive Panace, LA',
    date: '12-20 02:00 PM',
    amount: '69',
    status: 'Earned',
  },
];


// Sample transaction data typed with the interface
export const  transactionsData: Transaction[] = [
  {
    id: '1',
    amount: '+ $87.00',
    details: '$879 + $10 Tip',
    source: 'Lancaster > Lanest st',
    type: 'Payment',
    recipient: 'Pikia Inc',
    timestamp: '10th Feb 2024 | 02:33 am',
    isCredit: true,
  },
  {
    id: '2',
    amount: '- $79.86',
    details: '',
    source: 'Account Balance',
    type: 'Withdrawal',
    recipient: 'Bank',
    timestamp: '10th Feb 2024 | 02:35 am',
    isCredit: false,
  },
  {
    id: '3',
    amount: '+ $20.77',
    details: '$20.77 + $0 Tip',
    source: 'Sales Bonus',
    type: 'Payment',
    recipient: 'Pikia Inc',
    timestamp: '10th Feb 2024 | 02:33 am',
    isCredit: true,
  },
];


// requestData.ts


export const requests: Request[] = [
  {
    id: 1,
    pickupLocation: '4 Lancaster Avenue',
    dropoffLocation: '6th Lanest Street, Texas',
    distance: '10 meters away',
    progress: 90,
  },
  // {
  //   id: 2,
  //   pickupLocation: '4 Lancaster Avenue',
  //   dropoffLocation: '6th Lanest Street, Texas',
  //   distance: '15 meters away',
  //   progress: 40,
  // },
  // {
  //   id: 3,
  //   pickupLocation: '12 Maple Street',
  //   dropoffLocation: '8th Pine Avenue, Texas',
  //   distance: '20 meters away',
  //   progress: 70,
  // },
];




export const COUNTRY_CODES: CountryCode[] = [
    { code: '+1', country: 'United States', iso: 'us' },
    { code: '+44', country: 'United Kingdom', iso: 'gb' },
    { code: '+91', country: 'India', iso: 'in' },
    { code: '+86', country: 'China', iso: 'cn' },
    { code: '+81', country: 'Japan', iso: 'jp' },
    { code: '+49', country: 'Germany', iso: 'de' },
    { code: '+33', country: 'France', iso: 'fr' },
    { code: '+55', country: 'Brazil', iso: 'br' },
    { code: '+7', country: 'Russia', iso: 'ru' },
    { code: '+61', country: 'Australia', iso: 'au' },
    { code: '+82', country: 'South Korea', iso: 'kr' },
    { code: '+39', country: 'Italy', iso: 'it' },
    { code: '+34', country: 'Spain', iso: 'es' },
    { code: '+966', country: 'Saudi Arabia', iso: 'sa' },
    { code: '+971', country: 'United Arab Emirates', iso: 'ae' },
    { code: '+62', country: 'Indonesia', iso: 'id' },
    { code: '+52', country: 'Mexico', iso: 'mx' },
    { code: '+27', country: 'South Africa', iso: 'za' },
    { code: '+90', country: 'Turkey', iso: 'tr' },
    { code: '+46', country: 'Sweden', iso: 'se' },
].sort((a, b) => a.country.localeCompare(b.country));