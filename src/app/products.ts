export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Elixir 1.0 Server',
    price: 10,
    description: 'Save & protect your local or cloud data with our certificated server',
    product_details: 'Serviced with your preferred cloud provider (Google or Amazon), start off with 30GB of free storage. Additional data is $0.10/GB.'
  },
  {
    id: 2,
    name: 'Elixir 1.0 VPN',
    price: 10,
    description: 'Connect to any of our VPNs to access virtual private networks from around the world!'
  },
  {
    id: 3,
    name: 'Alkaline Vault',
    price: 5,
    description: 'Configure your data to our disaster proof recovery & backup technology!'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/