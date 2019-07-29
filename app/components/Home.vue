<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <Label class="action-bar-title" text="Home"></Label>
        </ActionBar>

        <StackLayout>
           <Button text="Set notification every 15min." @tap="setNotification" />
        </StackLayout>
    </Page>
</template>

<style scoped lang="scss">
    // Start custom common variables
    @import '../app-variables';
    // End custom common variables

    // Custom styles
    .fa {
        color: $accent-dark;
    }

    .info {
        font-size: 20;
    }
</style>
<script>
import jobScheduler from "./../common/job-scheduler.js";
var utils = require("tns-core-modules/utils/utils");
export default {
    data(){
        return {

        }
    },
    methods: {
        setNotification(){
            jobScheduler.scheduleJob(utils.ad.getApplicationContext());
        }
    }
}
</script>