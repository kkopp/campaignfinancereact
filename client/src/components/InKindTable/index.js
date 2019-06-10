import React from 'react';
import { MDBDataTable, MDBContainer } from 'mdbreact';

const InKindTable = () => {
  const data = {
    columns: [
      {
        label: 'Date',
        field: 'Date',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Amount',
        field: 'Amount',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Contributed Item',
        field: 'Contributed Item',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Campaign Name',
        field: 'Campaign Name',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Organization',
        field: 'Organization',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Contributor Last Name',
        field: 'Contributor Last Name',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Contributor First Name',
        field: 'Contributor First Name',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Employer',
        field: 'Employer',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Occupation',
        field: 'Occupation',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Contributor Address',
        field: 'Contributor Address',
        sort: 'asc',
        width: 100
      }
    ],
    rows: [
        {
            "Date": "1/17/2019",
            "Amount": 1641.1,
            "Contributed Item": "Event Food & Beverage",
            "Campaign Name": "Hancock for Denver",
            "Organization": "L.C. Fulenwider Inc.",
            "Contributor Last Name": "",
            "Contributor First Name": "",
            "Employer": "",
            "Occupation": "",
            "Contributor Address": "1125 17th St. Suite 2500"
          },
          {
            "Date": "1/28/2019",
            "Amount": 350,
            "Contributed Item": "Radio Ad",
            "Campaign Name": "People for a More Pragmatic Government",
            "Organization": "",
            "Contributor Last Name": "Nelson-Giavanni",
            "Contributor First Name": "Atouro",
            "Employer": "United Postal Service",
            "Occupation": "Store Clerk",
            "Contributor Address": ""
          },
          {
            "Date": "2/15/2019",
            "Amount": 2000,
            "Contributed Item": "Event Food/Beverage/Staff",
            "Campaign Name": "Hancock for Denver",
            "Organization": "",
            "Contributor Last Name": "Swank",
            "Contributor First Name": "Chris",
            "Employer": "La Rumba",
            "Occupation": "Owner",
            "Contributor Address": ""
          },
          {
            "Date": "2/21/2019",
            "Amount": 802,
            "Contributed Item": "Print & Digital Advertising",
            "Campaign Name": "Lisa For Denver Mayor",
            "Organization": "The Weekly Issue / El Semanario",
            "Contributor Last Name": "",
            "Contributor First Name": "",
            "Employer": "",
            "Occupation": "",
            "Contributor Address": "8400 East Crescent Parkway,"
          },
          {
            "Date": "2/22/2019",
            "Amount": 2787.92,
            "Contributed Item": "Event Food & Beverage",
            "Campaign Name": "Hancock for Denver",
            "Organization": "Bellco Credit Union",
            "Contributor Last Name": "",
            "Contributor First Name": "",
            "Employer": "",
            "Occupation": "",
            "Contributor Address": "7600 E. Orchard Rd. #400n"
          },
          {
            "Date": "3/1/2019",
            "Amount": 150,
            "Contributed Item": "Event Ticket",
            "Campaign Name": "Lisa For Denver Mayor",
            "Organization": "",
            "Contributor Last Name": "Wheeland",
            "Contributor First Name": "Lance",
            "Employer": "",
            "Occupation": "",
            "Contributor Address": ""
          },
          {
            "Date": "3/25/2019",
            "Amount": 1992.87,
            "Contributed Item": "Event Food & Beverage",
            "Campaign Name": "Hancock for Denver",
            "Organization": "H. J. Russell Inc.",
            "Contributor Last Name": "",
            "Contributor First Name": "",
            "Employer": "",
            "Occupation": "",
            "Contributor Address": "171 17th St. NW Suite 1600"
          },
          {
            "Date": "3/31/2019",
            "Amount": 500,
            "Contributed Item": "Event Entertainment",
            "Campaign Name": "Hancock for Denver",
            "Organization": "Exum Global Enterprises LLC",
            "Contributor Last Name": "",
            "Contributor First Name": "",
            "Employer": "",
            "Occupation": "",
            "Contributor Address": "2910 N. Powers Blvd."
          },
          {
            "Date": "3/31/2019",
            "Amount": 3000,
            "Contributed Item": "Event Entertainment",
            "Campaign Name": "Hancock for Denver",
            "Organization": "Tag Team",
            "Contributor Last Name": "",
            "Contributor First Name": "",
            "Employer": "",
            "Occupation": "",
            "Contributor Address": "2625 Piedmont Rd."
          },
          {
            "Date": "3/31/2019",
            "Amount": 2500,
            "Contributed Item": "Event Entertainment",
            "Campaign Name": "Hancock for Denver",
            "Organization": "Jakarta",
            "Contributor Last Name": "",
            "Contributor First Name": "",
            "Employer": "",
            "Occupation": "",
            "Contributor Address": "2920 E. 17th Ave."
          },
          {
            "Date": "3/31/2019",
            "Amount": 3000,
            "Contributed Item": "Event Beverage",
            "Campaign Name": "Hancock for Denver",
            "Organization": "The Tavern Lowry",
            "Contributor Last Name": "",
            "Contributor First Name": "",
            "Employer": "",
            "Occupation": "",
            "Contributor Address": "7401 E. 1st St."
          },
          {
            "Date": "3/31/2019",
            "Amount": 516,
            "Contributed Item": "Lodging",
            "Campaign Name": "Hancock for Denver",
            "Organization": "Denver Airport Marriott",
            "Contributor Last Name": "",
            "Contributor First Name": "",
            "Employer": "",
            "Occupation": "",
            "Contributor Address": "16455 E 40th Cir."
          },
          {
            "Date": "3/31/2019",
            "Amount": 200,
            "Contributed Item": "Event Entertainment",
            "Campaign Name": "Hancock for Denver",
            "Organization": "",
            "Contributor Last Name": "Adams",
            "Contributor First Name": "Sam",
            "Employer": "Self Employed",
            "Occupation": "Entertainer",
            "Contributor Address": ""
          },
          {
            "Date": "3/31/2019",
            "Amount": 1000,
            "Contributed Item": "Event Entertainment",
            "Campaign Name": "Hancock for Denver",
            "Organization": "",
            "Contributor Last Name": "Taylor",
            "Contributor First Name": "Otis",
            "Employer": "Self Employed",
            "Occupation": "Musician",
            "Contributor Address": ""
          },
          {
            "Date": "3/31/2019",
            "Amount": 300,
            "Contributed Item": "Event Entertainment",
            "Campaign Name": "Hancock for Denver",
            "Organization": "",
            "Contributor Last Name": "Garcia",
            "Contributor First Name": "Raquel",
            "Employer": "Self Employed",
            "Occupation": "Entertainer",
            "Contributor Address": ""
          },
          {
            "Date": "3/31/2019",
            "Amount": 1000,
            "Contributed Item": "Event Entertainment",
            "Campaign Name": "Hancock for Denver",
            "Organization": "",
            "Contributor Last Name": "Drabkin",
            "Contributor First Name": "Rob",
            "Employer": "Rob Drabkin Music",
            "Occupation": "Musician",
            "Contributor Address": ""
          },
          {
            "Date": "3/31/2019",
            "Amount": 350,
            "Contributed Item": "Event Entertainment",
            "Campaign Name": "Hancock for Denver",
            "Organization": "",
            "Contributor Last Name": "Alston",
            "Contributor First Name": "Wil",
            "Employer": "City & County of Denver",
            "Occupation": "Contractor",
            "Contributor Address": ""
          },
          {
            "Date": "3/31/2019",
            "Amount": 180,
            "Contributed Item": "Event Beverage",
            "Campaign Name": "Hancock for Denver",
            "Organization": "",
            "Contributor Last Name": "Schultz",
            "Contributor First Name": "Frank",
            "Employer": "The Tavern Lowry",
            "Occupation": "Owner",
            "Contributor Address": ""
          },
          {
            "Date": "4/1/2019",
            "Amount": 32,
            "Contributed Item": "Postage",
            "Campaign Name": "Lisa For Denver Mayor",
            "Organization": "",
            "Contributor Last Name": "Pritchard",
            "Contributor First Name": "Mary",
            "Employer": "",
            "Occupation": "",
            "Contributor Address": ""
          },
          {
            "Date": "4/1/2019",
            "Amount": 2000,
            "Contributed Item": "Office Space",
            "Campaign Name": "Lisa For Denver Mayor",
            "Organization": "",
            "Contributor Last Name": "Rathod",
            "Contributor First Name": "Siddartha",
            "Employer": "Rathod Mohamadbhai LLC, Attorney",
            "Occupation": "Attorney",
            "Contributor Address": ""
          },
          {
            "Date": "4/3/2019",
            "Amount": 49,
            "Contributed Item": "Event Food",
            "Campaign Name": "Hancock for Denver",
            "Organization": "",
            "Contributor Last Name": "Albo",
            "Contributor First Name": "Andrea",
            "Employer": "",
            "Occupation": "",
            "Contributor Address": ""
          },
          {
            "Date": "4/4/2019",
            "Amount": 880,
            "Contributed Item": "Event Food & Beverage",
            "Campaign Name": "Hancock for Denver",
            "Organization": "",
            "Contributor Last Name": "Engleberg",
            "Contributor First Name": "David",
            "Employer": "Cigar City",
            "Occupation": "Owner",
            "Contributor Address": ""
          },
          {
            "Date": "4/16/2019",
            "Amount": 3000,
            "Contributed Item": "Photoagraphy",
            "Campaign Name": "Jamie For Denver",
            "Organization": "Anna Phillips Photography",
            "Contributor Last Name": "",
            "Contributor First Name": "",
            "Employer": "",
            "Occupation": "",
            "Contributor Address": "3070 S Xenia st."
          },
          {
            "Date": "4/18/2019",
            "Amount": 150,
            "Contributed Item": "Event Space Rental",
            "Campaign Name": "Hancock for Denver",
            "Organization": "Nuevo Amanecer LLC",
            "Contributor Last Name": "",
            "Contributor First Name": "",
            "Employer": "",
            "Occupation": "",
            "Contributor Address": "PO Box 11463"
          },
          {
            "Date": "4/25/2019",
            "Amount": 300,
            "Contributed Item": "Event Food",
            "Campaign Name": "Hancock for Denver",
            "Organization": "",
            "Contributor Last Name": "Medina",
            "Contributor First Name": "Nicolas",
            "Employer": "Tres Chilis Restaurant",
            "Occupation": "Owner",
            "Contributor Address": ""
          },
          {
            "Date": "4/29/2019",
            "Amount": 50,
            "Contributed Item": "Event Food",
            "Campaign Name": "Hancock for Denver",
            "Organization": "",
            "Contributor Last Name": "Wilson",
            "Contributor First Name": "Darcy",
            "Employer": "",
            "Occupation": "",
            "Contributor Address": ""
          },
          {
            "Date": "4/29/2019",
            "Amount": 1600,
            "Contributed Item": "ADS",
            "Campaign Name": "Lisa For Denver Mayor",
            "Organization": "EL Semanario",
            "Contributor Last Name": "",
            "Contributor First Name": "",
            "Employer": "",
            "Occupation": "",
            "Contributor Address": "1600 Broadway #2400"
          },
          {
            "Date": "4/30/2019",
            "Amount": 1296,
            "Contributed Item": "Event Food & Beverage",
            "Campaign Name": "Hancock for Denver",
            "Organization": "",
            "Contributor Last Name": "Engle",
            "Contributor First Name": "Paul",
            "Employer": "Ameresco",
            "Occupation": "Business Development",
            "Contributor Address": ""
          },
          {
            "Date": "5/3/2019",
            "Amount": 154,
            "Contributed Item": "Painting Material",
            "Campaign Name": "Lisa For Denver Mayor",
            "Organization": "",
            "Contributor Last Name": "Potter",
            "Contributor First Name": "Hillary",
            "Employer": "UCBoulder",
            "Occupation": "Professor",
            "Contributor Address": ""
          },
          {
            "Date": "5/3/2019",
            "Amount": 1800,
            "Contributed Item": "ADS",
            "Campaign Name": "Lisa For Denver Mayor",
            "Organization": "EL Semanario",
            "Contributor Last Name": "",
            "Contributor First Name": "",
            "Employer": "",
            "Occupation": "",
            "Contributor Address": "1600 Broadway # 2400"
          },
          {
            "Date": "5/11/2019",
            "Amount": 450,
            "Contributed Item": "Event Supplies",
            "Campaign Name": "Hancock for Denver",
            "Organization": "Rent Rite",
            "Contributor Last Name": "",
            "Contributor First Name": "",
            "Employer": "",
            "Occupation": "",
            "Contributor Address": "1400 Yosemite St."
          },
          {
            "Date": "5/15/2019",
            "Amount": 1642.31,
            "Contributed Item": "Event Catering",
            "Campaign Name": "Hancock for Denver",
            "Organization": "Occasions Catering",
            "Contributor Last Name": "",
            "Contributor First Name": "",
            "Employer": "",
            "Occupation": "",
            "Contributor Address": "1789 W. Warren Ave."
          },
          {
            "Date": "5/17/2019",
            "Amount": 1200,
            "Contributed Item": "Event Catering",
            "Campaign Name": "Hancock for Denver",
            "Organization": "El TequiLeno",
            "Contributor Last Name": "",
            "Contributor First Name": "",
            "Employer": "",
            "Occupation": "",
            "Contributor Address": "2790 S. Havana St."
          },
          {
            "Date": "5/17/2019",
            "Amount": 1000,
            "Contributed Item": "Event Space",
            "Campaign Name": "Hancock for Denver",
            "Organization": "Nativ Denver LLC",
            "Contributor Last Name": "",
            "Contributor First Name": "",
            "Employer": "",
            "Occupation": "",
            "Contributor Address": "1612 Wazee St"
          },
          {
            "Date": "5/18/2019",
            "Amount": 612.33,
            "Contributed Item": "Event Food & Beverage",
            "Campaign Name": "Hancock for Denver",
            "Organization": "",
            "Contributor Last Name": "Tade",
            "Contributor First Name": "Eric",
            "Employer": "Denver Fire",
            "Occupation": "Firefighter/Chief",
            "Contributor Address": ""
          },
          {
            "Date": "5/22/2019",
            "Amount": 166.63,
            "Contributed Item": "Event Food & Beverage",
            "Campaign Name": "Hancock for Denver",
            "Organization": "",
            "Contributor Last Name": "O'Malley",
            "Contributor First Name": "Stephanie",
            "Employer": "City & County of Denver",
            "Occupation": "Director",
            "Contributor Address": ""
          },
          {
            "Date": "5/25/2019",
            "Amount": 70,
            "Contributed Item": "Event Food/Supplies",
            "Campaign Name": "Hancock for Denver",
            "Organization": "",
            "Contributor Last Name": "Burch",
            "Contributor First Name": "Barry",
            "Employer": "City & County of Denver",
            "Occupation": "Director",
            "Contributor Address": ""
          },
          {
            "Date": "1/1/2019",
            "Amount": 450,
            "Contributed Item": "Rent for office space",
            "Campaign Name": "People for a More Pragmatic Government",
            "Organization": "",
            "Contributor Last Name": "Nelson-Giavanni",
            "Contributor First Name": "Atouro",
            "Employer": "United Postal Service",
            "Occupation": "Store Clerk",
            "Contributor Address": ""
          },
          {
            "Date": "1/1/2019",
            "Amount": 3000,
            "Contributed Item": "SEO and SMO integration",
            "Campaign Name": "People for a More Pragmatic Government",
            "Organization": "",
            "Contributor Last Name": "Nelson-Giavanni",
            "Contributor First Name": "Marcus",
            "Employer": "For Sale by Owner Company",
            "Occupation": "Google Developer",
            "Contributor Address": ""
          },
          {
            "Date": "1/3/2019",
            "Amount": 500,
            "Contributed Item": "Event Entertainment",
            "Campaign Name": "Hancock for Denver",
            "Organization": "",
            "Contributor Last Name": "Wedgeworth",
            "Contributor First Name": "Elbra",
            "Employer": "Denver Health",
            "Occupation": "Administrator",
            "Contributor Address": ""
          },
          {
            "Date": "1/30/2019",
            "Amount": 3000,
            "Contributed Item": "Office Space",
            "Campaign Name": "Lisa For Denver Mayor",
            "Organization": "RM Properties and Management",
            "Contributor Last Name": "",
            "Contributor First Name": "",
            "Employer": "",
            "Occupation": "",
            "Contributor Address": "2701 Lawrence Street"
          },
          {
            "Date": "1/31/2019",
            "Amount": 3000,
            "Contributed Item": "Painting Services",
            "Campaign Name": "Lisa For Denver Mayor",
            "Organization": "",
            "Contributor Last Name": "Evans",
            "Contributor First Name": "Thomas",
            "Employer": "Self",
            "Occupation": "Painter",
            "Contributor Address": ""
          },
          {
            "Date": "2/1/2019",
            "Amount": 9.12,
            "Contributed Item": "Food",
            "Campaign Name": "Lisa For Denver Mayor",
            "Organization": "",
            "Contributor Last Name": "Felton",
            "Contributor First Name": "Sue",
            "Employer": "University of Colorado",
            "Occupation": "Research Assistant",
            "Contributor Address": ""
          },
          {
            "Date": "2/1/2019",
            "Amount": 13.29,
            "Contributed Item": "Food",
            "Campaign Name": "Lisa For Denver Mayor",
            "Organization": "",
            "Contributor Last Name": "Felton",
            "Contributor First Name": "Sue",
            "Employer": "University of Colorado",
            "Occupation": "Research Assistant",
            "Contributor Address": ""
          },
          {
            "Date": "2/1/2019",
            "Amount": 19.81,
            "Contributed Item": "Food and Beverages",
            "Campaign Name": "Lisa For Denver Mayor",
            "Organization": "",
            "Contributor Last Name": "Felton",
            "Contributor First Name": "Sue",
            "Employer": "University of Colorado",
            "Occupation": "Research Assistant",
            "Contributor Address": ""
          },
          {
            "Date": "2/1/2019",
            "Amount": 31.92,
            "Contributed Item": "Food and Beverages",
            "Campaign Name": "Lisa For Denver Mayor",
            "Organization": "",
            "Contributor Last Name": "Felton",
            "Contributor First Name": "Sue",
            "Employer": "University of Colorado",
            "Occupation": "Research Assistant",
            "Contributor Address": ""
          },
          {
            "Date": "2/1/2019",
            "Amount": 15.1,
            "Contributed Item": "Beverages",
            "Campaign Name": "Lisa For Denver Mayor",
            "Organization": "",
            "Contributor Last Name": "Felton",
            "Contributor First Name": "Sue",
            "Employer": "University of Colorado",
            "Occupation": "Research Assistant",
            "Contributor Address": ""
          },
          {
            "Date": "2/1/2019",
            "Amount": 65.23,
            "Contributed Item": "Food and Beverages",
            "Campaign Name": "Lisa For Denver Mayor",
            "Organization": "",
            "Contributor Last Name": "Felton",
            "Contributor First Name": "Sue",
            "Employer": "University of Colorado",
            "Occupation": "Research Assistant",
            "Contributor Address": ""
          },
          {
            "Date": "2/1/2019",
            "Amount": 14.28,
            "Contributed Item": "Letters",
            "Campaign Name": "Lisa For Denver Mayor",
            "Organization": "",
            "Contributor Last Name": "Felton",
            "Contributor First Name": "Sue",
            "Employer": "University of Colorado",
            "Occupation": "Research Assistant",
            "Contributor Address": ""
          },
          {
            "Date": "2/2/2019",
            "Amount": 63.08,
            "Contributed Item": "Beverages",
            "Campaign Name": "Lisa For Denver Mayor",
            "Organization": "",
            "Contributor Last Name": "Felton",
            "Contributor First Name": "Sue",
            "Employer": "University of Colorado",
            "Occupation": "Research Assistant",
            "Contributor Address": ""
          },
          {
            "Date": "3/11/2019",
            "Amount": 862.33,
            "Contributed Item": "Event Food & Beverage",
            "Campaign Name": "Hancock for Denver",
            "Organization": "Shea Properties",
            "Contributor Last Name": "",
            "Contributor First Name": "",
            "Employer": "",
            "Occupation": "",
            "Contributor Address": "6380 Fiddlers Green Cir #400"
          },
          {
            "Date": "3/15/2019",
            "Amount": 360,
            "Contributed Item": "PrintAdvertisement",
            "Campaign Name": "Lisa For Denver Mayor",
            "Organization": "The Weekly Issue El Semanario.",
            "Contributor Last Name": "",
            "Contributor First Name": "",
            "Employer": "",
            "Occupation": "",
            "Contributor Address": "P.O. Box 460428"
          },
          {
            "Date": "3/23/2019",
            "Amount": 17.5,
            "Contributed Item": "Postage",
            "Campaign Name": "Lisa For Denver Mayor",
            "Organization": "Maryalice Rael, address is",
            "Contributor Last Name": "",
            "Contributor First Name": "",
            "Employer": "",
            "Occupation": "",
            "Contributor Address": "2802 S Depew St"
          },
          {
            "Date": "4/7/2019",
            "Amount": 65.98,
            "Contributed Item": "Supplies",
            "Campaign Name": "Hancock for Denver",
            "Organization": "",
            "Contributor Last Name": "Saunders",
            "Contributor First Name": "Brittany",
            "Employer": "Sewald Hanfling",
            "Occupation": "Lobbyist",
            "Contributor Address": ""
          },
          {
            "Date": "4/7/2019",
            "Amount": 50,
            "Contributed Item": "Event Catering",
            "Campaign Name": "Hancock for Denver",
            "Organization": "",
            "Contributor Last Name": "Kaplan",
            "Contributor First Name": "Jared",
            "Employer": "Bagel Deli",
            "Occupation": "Owner",
            "Contributor Address": ""
          },
          {
            "Date": "4/7/2019",
            "Amount": 10.5,
            "Contributed Item": "Postage",
            "Campaign Name": "Lisa For Denver Mayor",
            "Organization": "",
            "Contributor Last Name": "Rael",
            "Contributor First Name": "Maryalice",
            "Employer": "Insurance verifier",
            "Occupation": "Infectious Disease Consultants",
            "Contributor Address": ""
          },
          {
            "Date": "4/8/2019",
            "Amount": 296.88,
            "Contributed Item": "Event Food & Beverage",
            "Campaign Name": "Hancock for Denver",
            "Organization": "",
            "Contributor Last Name": "Palmer",
            "Contributor First Name": "David",
            "Employer": "Greenberg Traurig",
            "Occupation": "Attorney",
            "Contributor Address": ""
          },
          {
            "Date": "4/9/2019",
            "Amount": 175,
            "Contributed Item": "Event Food & Beverage",
            "Campaign Name": "Hancock for Denver",
            "Organization": "",
            "Contributor Last Name": "Asfaw",
            "Contributor First Name": "Desta",
            "Employer": "",
            "Occupation": "",
            "Contributor Address": ""
          },
          {
            "Date": "4/9/2019",
            "Amount": 214,
            "Contributed Item": "Event Beverage",
            "Campaign Name": "Hancock for Denver",
            "Organization": "",
            "Contributor Last Name": "Folena",
            "Contributor First Name": "Rob",
            "Employer": "Centro",
            "Occupation": "Director",
            "Contributor Address": ""
          },
          {
            "Date": "4/9/2019",
            "Amount": 294,
            "Contributed Item": "Event Food",
            "Campaign Name": "Hancock for Denver",
            "Organization": "So Damn Gouda",
            "Contributor Last Name": "",
            "Contributor First Name": "",
            "Employer": "",
            "Occupation": "",
            "Contributor Address": "2432 W. 44th Ave."
          },
          {
            "Date": "4/10/2019",
            "Amount": 10.5,
            "Contributed Item": "Postage",
            "Campaign Name": "Lisa For Denver Mayor",
            "Organization": "",
            "Contributor Last Name": "Murdaugh",
            "Contributor First Name": "ANNE",
            "Employer": "Not Employed",
            "Occupation": "Not Employed",
            "Contributor Address": ""
          },
          {
            "Date": "4/12/2019",
            "Amount": 953.38,
            "Contributed Item": "Signs",
            "Campaign Name": "Hancock for Denver",
            "Organization": "Gourmet40 LLC",
            "Contributor Last Name": "",
            "Contributor First Name": "",
            "Employer": "",
            "Occupation": "",
            "Contributor Address": "3600 E. 40th Ave."
          },
          {
            "Date": "4/13/2019",
            "Amount": 300,
            "Contributed Item": "Event Catering",
            "Campaign Name": "Hancock for Denver",
            "Organization": "Nativ Denver LLC",
            "Contributor Last Name": "",
            "Contributor First Name": "",
            "Employer": "",
            "Occupation": "",
            "Contributor Address": "1612 Wazee St"
          },
          {
            "Date": "4/16/2019",
            "Amount": 296.88,
            "Contributed Item": "Event Food & Beverage",
            "Campaign Name": "Hancock for Denver",
            "Organization": "",
            "Contributor Last Name": "Palmer",
            "Contributor First Name": "David",
            "Employer": "Greenberg Traurig",
            "Occupation": "Attorney",
            "Contributor Address": ""
          }
    ]
  };

  return (
    <MDBContainer>
        <MDBDataTable
            striped
            bordered
            hover
            data={data}
        />
    </MDBContainer>
  );
}

export default InKindTable;