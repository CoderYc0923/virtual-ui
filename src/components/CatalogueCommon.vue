<template>
  <ul>
    <li class="li-style font-bold" style="color: black">CONTENTS</li>
    <li
      v-for="(item, index) in catalogueList"
      :class="{ 'select-link': selfLink === item.text }"
      class="li-style transition cursor-pointer"
      :key="index"
      @click="gotoLink(item.id)"
    >
      {{ item.text }}
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps({
  catalogueList: {
    type: Array as () => { text: string; id: string }[],
  },
  selfLink: {
    type: String,
  },
});

const gotoLink = (linkId: string) => {
  document.getElementById(linkId)!.scrollIntoView({ behavior: "smooth" });
};
</script>

<style lang="scss">
.li-style {
  @apply mb-2 text-gray-600 text-xs;
}
.select-link {
  @apply text-lightBlue-400 relative;
  &:after {
    content: "";
    @apply absolute -left-2 h-5/6 w-1 bg-lightBlue-400 rounded top-1/2 transform -translate-y-2/4;
  }
}
</style>
