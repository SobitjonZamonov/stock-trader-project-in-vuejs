export const loadData = ({ commit }) => {
    const data = {
        funds: 10000,
        stockPortfolio: [
            { id: 1, quantity: 10 },
            { id: 2, quantity: 5 }
        ],
        stocks: [
            { id: 1, name: 'BMW', price: 110 },
            { id: 2, name: 'Google', price: 200 },
            { id: 3, name: 'Apple', price: 250 },
            { id: 4, name: 'Twitter', price: 8 }
        ]
    }

    const portfolio = {
        funds: data.funds,
        stockPortfolio: data.stockPortfolio ? data.stockPortfolio : []
    }

    commit('SET_PORTFOLIO', portfolio);
    commit('SET_STOCKS', data.stocks);
};