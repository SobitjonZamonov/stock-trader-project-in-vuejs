<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand">Stock Trader</router-link>
            </div>

            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <router-link to="/portfolio" active-class="active" tag="li"><a>Portfolio</a></router-link>
                    <router-link to="/stocks" active-class="active" tag="li"><a>Stocks</a></router-link>
                </ul>
                <strong class="navbar-text navbar-right">Funds: {{ funds | currency }}</strong>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#" @click="endDay">End Day</a></li>
                    <li class="dropdown" :class="{ open: isDropdownOpen }" @click="isDropdownOpen = !isDropdownOpen">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                            aria-expanded="false">Save & Load <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#" @click="saveData">Save Data</a></li>
                            <li><a href="#" @click="loadData">Load Data</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
    data() {
        return {
            isDropdownOpen: false
        }
    },
    computed: {
        ...mapGetters(['funds', 'stockPortfolio', 'stocks'])
    },
    methods: {
        ...mapActions(['randomizeStocks']),
        ...mapMutations(['SET_STOCKS', 'SET_PORTFOLIO']),

        endDay() {
            this.randomizeStocks();
        },

        saveData() {
            const data = {
                funds: this.funds,
                stockPortfolio: this.stockPortfolio,
                stocks: this.stocks
            };
            localStorage.setItem('stock-trader-data', JSON.stringify(data));
        },

        loadData() {
            const rawData = localStorage.getItem('stock-trader-data');
            if (rawData) {
                const data = JSON.parse(rawData);
                const portfolio = {
                    funds: data.funds,
                    stockPortfolio: data.stockPortfolio
                };
                this.SET_STOCKS(data.stocks);
                this.SET_PORTFOLIO(portfolio);
            }
        }
    }
}
</script>