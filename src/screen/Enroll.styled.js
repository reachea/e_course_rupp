import styled from "styled-components";

export const EnrollContainer = styled.div`
  padding: 40px 0px;

  .btn-add-to-cart {
    border-radius: 25px;
    color: coral;
    width: 150px;
    padding: 10px;
  }
  #bg-nav-center {
    background-color: blueviolet;
    color: cornsilk;
  }
  .tab-none {
    display: none;
  }
  /* Style the tab content */
  .tabcontent {
    margin-top: 50px;
    padding: 6px 12px;
    border: 1px solid #ccc;
    border-top: none;
    animation: fadeEffect 1s; /* Fading effect takes 1 second */
  }
  /* Fade in tabs */
  @-webkit-keyframes fadeEffect {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeEffect {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Style the sidenav links and the dropdown button */
  .sidenav a,
  .dropdown-btn {
    padding: 10px 18px 10px 26px;
    text-decoration: none;
    font-size: 20px;
    color: rgb(7, 2, 1);
    display: block;
    border: none;
    background: none;
    width: 100%;
    text-align: left;
    cursor: pointer;
    outline: none;
  }

  /* On mouse-over */
  .sidenav a:hover,
  .dropdown-btn:hover {
    color: #d18631;
  }

  /* Add an active class to the active dropdown button */
  .active {
    color: orange;
  }

  /* Dropdown container (hidden by default). Optional: add a lighter background color and some left padding to change the design of the dropdown content */
  .dropdown-container {
    display: none;
    padding-left: 12px;
  }

  /* Optional: Style the caret down icon */
  .fa-caret-down {
    float: right;
    padding-right: 8px;
  }

  button {
    --border-radius: 15px;
    --border-width: 4px;
    appearance: none;
    position: relative;
    padding: 1em 2em;
    border: 0;
    background-color: #212121;
    font-family: "Roboto", Arial, "Segoe UI", sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: #fff;
    z-index: 2;
  }

  button::after {
    --m-i: linear-gradient(#000, #000);
    --m-o: content-box, padding-box;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: var(--border-width);
    border-radius: var(--border-radius);
    background-image: conic-gradient(
      #488cfb,
      #29dbbc,
      #ddf505,
      #ff9f0e,
      #e440bb,
      #655adc,
      #488cfb
    );
    -webkit-mask-image: var(--m-i), var(--m-i);
    mask-image: var(--m-i), var(--m-i);
    -webkit-mask-origin: var(--m-o);
    mask-origin: var(--m-o);
    -webkit-mask-clip: var(--m-o);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
    filter: hue-rotate(0);
    animation: rotate-hue linear 500ms infinite;
    animation-play-state: paused;
  }

  button:hover::after {
    animation-play-state: running;
  }

  @keyframes rotate-hue {
    to {
      filter: hue-rotate(1turn);
    }
  }

  button,
  button::after {
    box-sizing: border-box;
  }

  button:active {
    --border-width: 5px;
  }
`;
