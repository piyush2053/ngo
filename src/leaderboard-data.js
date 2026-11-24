// Illustrative entries only; replace with verified, consented donor records before launch.
// Donor names are always shown in English, whichever site language is selected.
export const punyaDonors = [
  ['Rajesh Sharma', 3851], ['Sunita Verma', 3600], ['Mohan Patel', 3501],
  ['Kavita Tiwari', 3250], ['Suresh Yadav', 3100], ['Anita Dubey', 2901],
  ['Vinod Chouhan', 2750], ['Pooja Mishra', 2600], ['Ramesh Gupta', 2501],
  ['Meena Joshi', 2400], ['Ajay Thakur', 2251], ['Seema Shukla', 2100],
  ['Deepak Sahu', 2001], ['Rekha Pandey', 1850], ['Sanjay Agrawal', 1751],
  ['Neelam Soni', 1600], ['Alok Jain', 1501], ['Priya Malviya', 1400],
  ['Harish Sen', 1251], ['Savita Rathore', 1100], ['Nitin Upadhyay', 1001],
  ['Vandana Nema', 850], ['Ashok Lodhi', 751], ['Radha Vishwakarma', 601],
  ['Manoj Kushwaha', 501],
].map(([name, amount], index) => ({ id: index + 1, name, amount }));
