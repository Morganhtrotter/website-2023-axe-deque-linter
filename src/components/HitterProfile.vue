<template>
    <div class="hitter-prof-wrapper">
        <div v-if="this.stats.people">
            <div class="header-wrapper">
                <h5 v-if="this.stats.people[0].primaryNumber">{{ this.stats.people[0].primaryNumber }}</h5>
                <h5 v-else>NA</h5>
                <h4>{{ this.stats.people[0].fullName }} <p>{{ this.stats.people[0].primaryPosition.abbreviation }}</p></h4>
            </div>
        </div>
        <!--<h4>{{ this.stats.people[0].fullName }}</h4>
        <h4>{{ this.stats.fullName }}</h4>-->
    </div>
</template>
<script>
export default {
    props: {
        stats: {
            type: Object,
            required: false
        }
    }
}
</script>
<style scoped>
.hitter-prof-wrapper {
    padding: 12px 20px;
    border: 1px solid black;
    border-radius: 2.5px;
}
.hitter-prof-wrapper:hover {
    cursor: pointer;
    border: 1px solid magenta;
}

.hitter-prof-wrapper:hover h4, .hitter-prof-wrapper:hover h5 {
    color: magenta;
}

h4, p {
    float: right;
    display: inline;
}

h4 p {
    padding-left: 8px;
    min-width: 30px;
}

h5 {
    width: fit-content;
    display: inline;
}
</style>