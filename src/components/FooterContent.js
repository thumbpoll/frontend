import React, { Component } from "react";

const languages = [
  "English (UK)",
  "Bahasa Indonesia",
  "Bahasa Sunda",
  "Basa Jawa",
  "日本語",
  "Français (France)",
  "Español",
  "한국어",
  "Português (Brasil)",
  "Deutsch"
];

const links = [
  "About",
  "Help Center",
  "Blog",
  "Status",
  "Jobs",
  "Terms",
  "Privacy Policy",
  "Cookies",
  "Apps",
  "Businesses",
  "Developers",
  "Setting",
  "Career",
  "Account Security"
];

const language = languages.map(language => {
  return (
    <span style={{ margin: "5px", color: "#000" }} key={language}>
      {language}
    </span>
  );
});

const link = links.map(link => {
  return (
    <span style={{ margin: "5px", color: "#000" }} key={link}>
      {link}
    </span>
  );
});
export default class FooterContent extends Component {
  render() {
    return (
      <div>
        {language}
        <br />
        <br />
        {link}
        <br />
        <br />
        <span style={{ color: "#000" }}>Thumbpoll © 2019</span>
      </div>
    );
  }
}
