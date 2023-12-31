# Fast Pizza 🍕

> A product-minded E-commerce platform for a fictional pizza restaurant.


## Installation

1. Clone the repository:
`git clone https://github.com/jayden-n/fast-pizza.git`

2. Navigate to the project directory:
  `cd fast-pizza`

3. Install dependencies: `npm ci` within the directory (to get all the required dependencies installed)

4. Run & enjoy the App :) `npm run dev` & navigate to http://localhost:3000


## What problems does this app solve?

- add pizza to cart, choose quantity of each
- track what you already have in cart
- make order by complete form with phone, address (possible to use geolocation)
- add order to priority queue by paying extra money
- no payment processing


## Tech Features:

- application uses backend servise to fetch and post data: `remote state`
- remote state managed by `react router data loading feature` ("render as you fetch") & router action to post data to remote api
- global UI state manage be `redux/redux-toolkit & thunks`, split global state on slices
- styling: tailwindcss, responsive design `mobile first`

## Built with a bunch of things, but to name a few:


- [React](https://react.dev)
- [TailwindCSS](https://tailwindcss.com)
- [Vite](https://vitejs.dev)
- [Hosted by Netlify](https://www.netlify.com)

Third-party packages:

- [Framer Motion](https://www.framer.com/motion)
- [React Router](https://reactrouter.com/en/main)
- [React Redux](https://react-redux.js.org/)

## Contributing

Pull requests are welcomed and highly appreciated. Before making any major changes, please feel free to open an issue and initiate a discussion about your ideas. Your valuable input and collaboration are greatly valued.
