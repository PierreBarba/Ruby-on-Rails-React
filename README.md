<a name="readme-top"></a>

<div align="center">
  <img src="fusion.png" alt="logo" width="280"  height="auto" />
  <br/><br/>

  <h1><b>Ruby on Rails React </b></h1>

  <br/>

</div>

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#triangular_flag_on_post-deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🔭 Acknowledgements](#acknowledgements)
- [❓ FAQ](#faq)
- [📝 License](#license)


This application allows you to:

- See a random greeting

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Technology</summary>
  <ul>
    <li>Ruby</li>
    <li>Rails</li>
    <li>PostgresSQL</li>
  </ul>
</details>

<details>
  <summary>Tools</summary>
  <ul>
    <li>VS Code</li>
    <li>GIT</li>
    <li>GITHUB</li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- Use Postgres database.
- Use React to fetch the API
- Use WebPack to pack the JavaScript code

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

- Sorry, Currently not available

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running follow these simple example steps.

### Prerequisites

you have to those tools in your local machine.

- [ ] Ruby
- [ ] Rails
- [ ] PostgresSQL
- [ ] GIT & GITHUB
- [ ] Any Code Editor (VS Code, Brackets, etc)

### Clone Repo

Clone the project using the following bash command in an appropriate location.

```bash
  git clone https://github.com/PierreBarba/Ruby-on-Rails-React.git
```

Go to the project directory.

```bash
  cd hello-rails-react
```

### Adding credentials

Rails stores secrets in `config/credentials.yml.enc`, which is encrypted and hence cannot be edited directly. Rails uses `config/master.key`. If you have the master key, to add or change credentials in your terminal, run this command (change the name of you editor if you need for example code for VS Code)

```bash
  EDITOR="code" rails credentials:edit
```

This command will create the credentials file if it does not exist. Additionally, this command will create config/master.key if no master key is defined.
Here pass the --wait flag to make sure the encryption happens after the edits have been saved and the editor closed.

```bash
  EDITOR="code --wait" rails credentials:edit
```

The scaffolded credentials.yml.enc looks like below:

```bash
  postgres_password: Database User Password
  smtp_user_name: SMTP User name
  smtp_password: SMTP User password
```

To learn more [check Custom Credentials](https://edgeguides.rubyonrails.org/security.html#custom-credentials) documentation.

### Add necessary packages

For installing necessary packages, run the following bash command:

```bash
  bundle install
```

### Run the server in development mode

In the project directory, you can run the project by using following bash command:

```bash
  ./bin/dev
```

And now you can visit the site with the URL http://localhost:3000

### Run the test

For testing you can run:

```bash
  bundle exec rspec
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

### First Author:

**Jean Pierre Barba**

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/PierreBarba) [![linkedin](https://img.shields.io/badge/PierreBarba-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jean-pierre-barba/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a name="future-features"></a>

- [ ] **Live demo will added soon**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## 👋 Show your support <a name="support"></a>

Give a ⭐️ if you like this project!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🔭Acknowledgments <a name="acknowledgements"></a>

- My Family.
- [Microverse](microverse.org)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FAQ (optional) -->

## ❓ FAQ <a name="faq"></a>

- **Can I use this project for personal use?**

  - Yes, you can use it.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>