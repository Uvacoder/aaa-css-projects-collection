# Page Loading Animation
## code
### HTML
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loading_animation_1</title>
    <link rel="stylesheet" href="loading_animation_1c.css">
</head>
<body>
    <div class="ring">Loading 
        <span class="dots">
            <span></span>
            <span></span>
            <span></span>
        </span>
        <span class="rotate"></span>
    </div>
</body>
</html>

```

### CSS
```
*{
margin:0;
padding:0;
background:#262626;
}
.ring
{
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
width:150px;
height:150px;
background:transparent;
border:5px solid #3c3c3c;
border-radius:70%;
text-align:center;
line-height:150px;
font-family:sans-serif;
font-size:20px;
color:#fff000;
letter-spacing:2px;
text-shadow:0 0 10px #fcfcfb;
box-shadow:0 0 20px rgba(0,0,0,.5);
}
.ring:before
{
    content:'';
    position:absolute;
    top:-3px;
    left:-3px;
    width:100%;
    height:100%;
    border:3px solid transparent;
    border-top:3px solid #fff000;
    border-right:3px solid #fff000;
    border-radius:50%;
    animation: animateC 2s linear infinite;
}
.rotate
{
    display:block;
    position:absolute;
    top:calc(50% - 2px);
    left:50%;
    width:50%;
    height:2px;
    background:transparent;
    transform-origin:left;
    animation:animate 2s linear infinite;
}
@keyframes animateC
{
    0%
{
    transform:rotate(0deg);
}
100%
{
    transform:rotate(360deg);
}
}
@keyframes animate
{
0%
{
    transform:rotate(45deg);
}
100%
{
    transform:rotate(405deg);
}
}
.dots
{
    justify-content: center;
    display: flex;
    background: transparent;
    padding-top: 1cm;
}
.dots span
{
    width: 14px;
    height: 14px;
    border-radius: 50%;
    margin: 0 6px;
    background-color: #ff4006;
    -webkit-animation: bounce 1s infinite alternate;
    -moz-animation: bounce 1s infinite alternate;
    -o-animation: bounce 1s infinite alternate;
    animation: bounce 1s infinite alternate;
}
@-webkit-keyframes bounce
{
    to
    {
        opacity: 0.2;
        transform: translateY(-20px);
    }
}

.dots span:nth-child(3)
{
    animation-delay: 0.6s;
}
.dots span:nth-child(2)
{
    animation-delay: 0.3s;
}

```

## Preview

![Screenshot 2022-10-05 160515](https://user-images.githubusercontent.com/104223444/194041082-dea0c38c-5250-49fc-b2a9-87b3680d3966.png)
