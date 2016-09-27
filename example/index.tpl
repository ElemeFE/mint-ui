<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title>Mint UI</title>
    <!-- page -->
    <link rel="stylesheet" href="//at.alicdn.com/t/font_1469597443_9221172.css">
  </head>
  <body>
    <app></app><% if (process.env.NODE_ENV === 'production') { %>
    <script src="//cdn.jsdelivr.net/vue/1.0.26/vue.min.js"></script>
    <script src="//cdn.jsdelivr.net/vue.router/0.7.13/vue-router.min.js"></script>
    <script src="//cdn.jsdelivr.net/fastclick/1.0.6/fastclick.min.js"></script><% } %>
  </body>
</html>
