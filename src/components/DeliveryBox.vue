<template>
    <div class="delivery-box">
        <div class="delivery-box__heading">
            <p class="heading-prime">Choose your delivery here</p>
        </div>
        <div class="delivery-box__order">
            <input
                class="delivery-input delivery-address"
                type="text"
                placeholder="Enter delivery address..."
            />
                <!-- <input class="delivery-input" type="date" /> -->
            <input class="delivery-input" type="datetime-local" />
        </div>
    </div>

</template>

<script>
export default {
    name: 'DeliveryBox'
}
</script>

<style lang="scss" scoped>
@import '../styles/deliveryBox/deliveryBox.scss';
</style>
