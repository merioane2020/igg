    <style>
{
  margin: 0;
padding: 0;
}
        /* Basic reset and styling */
        body, html {
          
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            justify-content: center;
align-items: center;
            background-color: transparent;
            font-family: Arial, sans-serif;
        }

        /* Menu container */
        .mod-menu {

            width: auto;
            height: auto;
            background-image: url("https://i.postimg.cc/HLZtPQhr/D36-AA06-C-0723-44-BF-9011-9-C8909-DC7306.gif");
            border: 4px solid #FEFF00;
            box-shadow: 0 0 15px #FEFF00 inset, 0 0 40px #FEFF00;
            border-radius: 2px;
            overflow: hidden;
            user-select: none;
            position: relative;
            color: white;
        }

        /* Page buttons */
        .page-buttons {
            display: flex;
            background-color: transparent;
            border: 1px solid #FEFF00;
            box-shadow: 0 0 5px #FEFF00 inset, 0 0 5px #FEFF00;
        }

        .page-button {
          font-size: 13px;
            flex: 1;
            padding: 3px;
            text-align: center;
            cursor: pointer;#FEFF00
            transition: background-color 0.3s;
            color: #FEFF00;
        }

        .page-button.active {
            background-color: transparent;
            color: #FF0000;
        }

        /* Menu content */
        .menu-page {
            display: none;
            padding: 12px;
        }

        .menu-page.active {
            display: block;
            
        }

        /* Button container for 2 buttons per line */
        .button-row {
            display: flex;
            justify-content: space-between;
            gap: 10px;
        }

        /* Button styling */
        .mod-button {
            background:transparent;
            border: 1.5px solid #FEFF00;
            box-shadow: 0 0 5px #FEFF00 inset, 0 0 5px #FEFF00;
            border-radius: px;
            padding: 13px;
            margin: 5px 0;
            cursor: pointer;
            text-align: center;
            color: #FFFFFF;
            font-size: 12px;
            width: 100%;
            transition: background 0.3s, transform 0.2s;
        }

        .mod-button:hover {
            background: #222222;
            transform: scale(1.05);
        }

        .mod-menu .header {
          color: #FFFFFF;
          font-size: 17px;
          margin: ;
            cursor: move;
            background: transparent;
            padding: 10px;
            text-align: center;
            
        }
        a {
          color: #FFFFFF;
        }
p {
  align-items: center;
  margin:0px;
  text-align: center;
  color: #FF0000;
}
.imgX{
  background: transparent;
  margin-right: 20px;
  margin: 0;
  padding: 0;
  width:80px;
  height:16px;
}
.p1{
  color:#FF0000;
}
.serche{
  
  background:transparent;
            border: 1px solid #FF0000;
            box-shadow: 0 0 5px #FF0000 inset, 0 0 5px #00FF0B;
            border-radius: 1px;
            padding: 1.5px;
            margin: 5px 0;
            cursor: pointer;
            text-align: center;
            color: #00FF0B;
            font-size: 15px;
            width: 100%;
            transition: background 0.3s, transform 0.2s;
}

.imgchannel{
  background: transparent;
margin: 0;
padding: 0;
width:80px;
height:13px;
}
.head{
  font-size: 17px;
  color: #00FF20;
margin: 0;
padding: 0;
cursor: move;
background: transparent;
padding: 0;
text-align: center;
           
            
}

.headact{
  font-size: 17px;
  color: #FF0000;
  margin: 1px;
padding:0;
  cursor: move;
            background: transparent;
            padding: 0;
            text-align: center;
            
}
    </style>