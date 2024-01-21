<template>
    <div class="hitter-prof-wrapper" @click="open">
        <div v-if="this.stats.people">
            <div class="header-wrapper">
                <h5 v-if="this.stats.people[0].primaryNumber">{{ this.stats.people[0].primaryNumber }}</h5>
                <h5 v-else>NA</h5>
                <h4>{{ this.stats.people[0].fullName }} <p>{{ this.stats.people[0].primaryPosition.abbreviation }}</p></h4>
            </div>
        </div>
        <ModalsContainer />
    </div>
</template>
<script>
import { ModalsContainer, useModal } from 'vue-final-modal'
import ModalConfirm from './ModalConfirm.vue'
import { toRefs } from 'vue';

export default {
    props: {
        stats: {
            type: Object,
            required: false
        }
    },
    setup(props) {
        const { stats } = toRefs(props);
        const { open, close } = useModal({
            component: ModalConfirm,
            attrs: {
                title: stats.value.people[0].fullName,
                onConfirm() {
                    close()
                },
            },
            slots: {
                default: '<p>The content of the modal</p>',
            },
        })
        return {
            open,
            close
        };
    }
}
</script>
<style scoped lang="scss">
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

.modal-btn {
    z-index: 99;
    &:hover {
        color: yellow;
    }
}
</style>