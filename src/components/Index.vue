<template>
  <div id="index">
    <!-- <h1 class="distant1">欢迎使用本系统</h1>
     -->
    <ul class="Words">
      <li class="Words-line">
        <p>&nbsp;</p>
        <p>Course Point System</p>
      </li>
      <li class="Words-line">
        <p>Welcome</p>
        <p id="welcome3">欢迎使用本积分系统</p>
      </li>

      <li class="Words-line">
        <p>Jiangxi Software University</p>
        <p>&nbsp;</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
#index {
  width: 600px;
  /* height: 400px; */
  margin: 0 auto;
  padding-top: 70px;
  /* background-color: red; */
}
.Words {
  margin: 0 auto;
  padding: 20px 0;
  font-family: "Source Sans Pro", Helvetica, Arial, sans-serif;
  font-size: 30px;
  font-weight: 900;
  letter-spacing: -2px;
  text-transform: uppercase;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -webkit-font-smoothing: antialiased;
  -webkit-font-kerning: normal;
  -webkit-text-size-adjust: 100%;
}
/*
** Apply common styles to each line of text
*/

.Words-line {
  height: 50px;
  overflow: hidden;
  position: relative;
}
/* .Words-line:nth-child(odd) {
  -webkit-transform: skew(60deg, -30deg) scaleY(0.66667);
  transform: skew(60deg, -30deg) scaleY(0.66667);
}
.Words-line:nth-child(even) {
  -webkit-transform: skew(0deg, -30deg) scaleY(1.33333);
  transform: skew(0deg, -30deg) scaleY(1.33333);
} */
.Words-line:nth-child(1) {
  left: 29px;
}
.Words-line:nth-child(2) {
  left: 58px;
}
.Words-line:nth-child(3) {
  left: 87px;
}
.Words-line:nth-child(4) {
  left: 116px;
}
.Words-line:nth-child(5) {
  left: 145px;
}
.Words-line:nth-child(6) {
  left: 174px;
}
.Words-line:nth-child(7) {
  left: 203px;
}
/*
** Fine-grained text styles
*/

p {
  height: 50px;
  line-height: 25px;
  padding: 0 10px;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  vertical-align: top;
  white-space: nowrap;
}
/*
** The hover interaction
*/

.Words:hover p {
  -webkit-transform: translate3d(0, -50px, 0);
  transform: translate3d(0, -50px, 0);
}

.distant1 {
  letter-spacing: 30px;
  text-align: center;
  color: rgba(163, 201, 201, 0.133);
  font-weight: bold;
  font-size: 40px;
  opacity: 0.6;
  text-shadow: 0 0 1px currentColor, -1px -1px 1px #030, 0 -1px 1px #030,
    1px -1px 1px #030, 1px 0 1px #030, 1px 1px 1px #030, 0 1px 1px #030,
    -1px 1px 1px #030, -1px 0 1px #030;
}

#welcome3 {
  padding-left: 60px;
  letter-spacing: 20px;
  font-weight: bold;
  float: left;
  -webkit-box-reflect: below -28px;
  -webkit-gradient: (
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 0)),
    to(rgba(255, 255, 255, 0.1))
  );
}
/* .distant1:after {
  content: "Distant Light";
  text-shadow: 0 0 1px currentColor;
  -webkit-filter: url(#distant1);
  filter: url(#distant1);
} */
</style>