import zoid from "zoid";

const MyWidget = zoid.create({
  tag: "my-widget",
  url: "http://127.0.0.1:5500/widget.html",
});

console.log("yo! have loaded mywidget from child: ");
console.log(MyWidget);

export default MyWidget;
