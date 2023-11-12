<template>
  <!-- 禁用按钮 -->
  <div class="box">
    <r-space inline>
      <r-button disabled>Default</r-button>
      <r-button type="success" disabled>Success</r-button>
      <r-button type="warn" disabled>Warn</r-button>
      <r-button type="primary" disabled>Primary</r-button>
      <r-button type="danger" disabled>Danger</r-button>
    </r-space>

    <r-space inline>
      <r-button plain disabled>Default</r-button>
      <r-button type="success" plain disabled>Success</r-button>
      <r-button type="warn" plain disabled>Warn</r-button>
      <r-button type="primary" plain disabled>Primary</r-button>
      <r-button type="danger" plain disabled>Danger</r-button>
    </r-space>
  </div>
</template>
