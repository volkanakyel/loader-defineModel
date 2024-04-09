<template>
  <div>
    <div @click="toggleUnformattedDisplay" data-testid="text">{{ formattedText }}</div>
    <div @click="toggleUnformattedDisplay" data-testid="value">{{ formattedValue }}</div>
    <div v-if="showUnformatted && config.showUnFormatted">{{ unformattedText }}</div>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    value: Number,
    config: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      showUnformatted: false,
    };
  },
  computed: {
    formattedValue() {
      if (this.value >= 1000000) {
        return `${(this.value / 1000000).toFixed(1)}M`;
      } else if (this.value === 1000000) {
        return '1M';
      } else if (this.value >= 1000) {
        return `${(this.value / 1000).toFixed(1)}K`;
      } else if (this.value === 1000) {
        return '1K';
      } else {
        return Math.round(this.value).toString();
      }
    },
    formattedText() {
      const maxTextLength = this.config.maxTextLength || 5;
      if (this.text.length > maxTextLength) {
        return `${this.text.substring(0, maxTextLength)}...`;
      }
      return this.text;
    },
    unformattedText() {
      return `${this.text}:${this.value}`;
    },
  },
  methods: {
    toggleUnformattedDisplay() {
      if (this.config.showUnFormatted) {
        this.showUnformatted = !this.showUnformatted;
      }
    },
  },
};
</script>
