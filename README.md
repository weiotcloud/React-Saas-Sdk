# WeIOT React SDK


![](https://cdn.weiot.cloud//UP64a35f1ca4e40.png)

![](https://img.shields.io/github/stars/Weiot-Cloud/Microfrontend-Module-Kit.svg) ![](https://img.shields.io/github/forks/Weiot-Cloud/Microfrontend-Module-Kit.svg) ![](https://img.shields.io/github/tag/Weiot-Cloud/Microfrontend-Module-Kit.svg) ![](https://img.shields.io/github/release/Weiot-Cloud/Microfrontend-Module-Kit.svg) ![](https://img.shields.io/github/issues/Weiot-Cloud/Microfrontend-Module-Kit.svg)










 
# Requirements

1. NodeJS 16+
2. Yarn or Npm Manager (Yarn is recommended)

# Installation

```bash
yarn install
```

```bash
yarn weiot
```

# WeIOT Cli

```bash

 ██╗    ██╗ ███████╗ ██╗  ██████╗  ████████╗
 ██║    ██║ ██╔════╝ ██║ ██╔═══██╗ ╚══██╔══╝
 ██║ █╗ ██║ █████╗   ██║ ██║   ██║    ██║   
 ██║███╗██║ ██╔══╝   ██║ ██║   ██║    ██║   
 ╚███╔███╔╝ ███████╗ ██║ ╚██████╔╝    ██║   
  ╚══╝╚══╝  ╚══════╝ ╚═╝  ╚═════╝     ╚═╝   

 ██████╗  ███████╗  █████╗   ██████╗ ████████╗      ██████╗ ██╗      ██╗ ██╗
 ██╔══██╗ ██╔════╝ ██╔══██╗ ██╔════╝ ╚══██╔══╝     ██╔════╝ ██║      ██║ ██║
 ██████╔╝ █████╗   ███████║ ██║         ██║        ██║      ██║      ██║ ██║
 ██╔══██╗ ██╔══╝   ██╔══██║ ██║         ██║        ██║      ██║      ██║ ╚═╝
 ██║  ██║ ███████╗ ██║  ██║ ╚██████╗    ██║        ╚██████╗ ███████╗ ██║ ██╗
 ╚═╝  ╚═╝ ╚══════╝ ╚═╝  ╚═╝  ╚═════╝    ╚═╝         ╚═════╝ ╚══════╝ ╚═╝ ╚═╝

 ? What do you want to do? 
  1) Create Webpack Config
   ──────────────
  2) Remove Build Folder
   ──────────────
  3) Build on Development Mode
  4) Build on Production Mode
```


# Start build an app

```bash
yarn serve
```

 
### FEATURES

1. Employer Actions
2. System Actions
3. Mobile App Actions
4. Remote Actions
5. Kiosk Actions

---

| Page          | Expose            | Page                         | Router | Parameters | Action |
| ------------- | ----------------- | ---------------------------- | ------ | ---------- | ------ |
| App Dashboard | ./DashboardExpose | ./src/Expose/DashboardExpose | YES    | NO         | X      |


| Page         | Expose        | Page                     | Router | Parameters | Action |
| ------------ | ------------- | ------------------------ | ------ | ---------- | ------ |
| Kiosk Screen | ./KioskExpose | ./src/Expose/KioskExpose | YES    | X          | X      |


| Page             | Expose         | Page                      | Router | Parameters | Action |
| ---------------- | -------------- | ------------------------- | ------ | ---------- | ------ |
| Mobile App Scren | ./MobileExpose | ./src/Expose/MobileExpose | YES    | X          | X      |


| Page                 | Expose         | Page                      | Router | Parameters | Action |
| -------------------- | -------------- | ------------------------- | ------ | ---------- | ------ |
| Public Access Screen | ./RemoteExpose | ./src/Expose/RemoteExpose | YES    | X          | X      |


| Page                       | Expose          | Page                       | Router | Parameters | Action |
| -------------------------- | --------------- | -------------------------- | ------ | ---------- | ------ |
| App Support Details Screen | ./SupportExpose | ./src/Expose/SupportExpose | NO     | X          | X      |


| Page                 | Expose              | Page                                       | Router | Parameters | Action |
| -------------------- | ------------------- | ------------------------------------------ | ------ | ---------- | ------ |
| Company Admin Screen | ./AdminModuleExpose | ./src/Expose/AdminExpose/AdminModuleExpose | YES    | X          | X      |


| Page                | Expose              | Page                                       | Router | Parameters | Action |
| ------------------- | ------------------- | ------------------------------------------ | ------ | ---------- | ------ |
| System Admin Screen | ./AdminSystemExpose | ./src/Expose/AdminExpose/AdminSystemExpose | YES    | X          | X      |


| Page              | Expose                    | Page                                               | Router | Parameters | Action |
| ----------------- | ------------------------- | -------------------------------------------------- | ------ | ---------- | ------ |
| Loyout BG Service | ./CompanyBackgroundExpose | ./src/Expose/CompanyExpose/CompanyBackgroundExpose | NO     | NO         | X      |

| Page                       | Expose                  | Page                                             | Router | Parameters | Action |
| -------------------------- | ----------------------- | ------------------------------------------------ | ------ | ---------- | ------ |
| Empoloyer Dashbaord Screen | ./CompanyEmployerExpose | ./src/Expose/CompanyExpose/CompanyEmployerExpose | NO     | X          | X      |

| Page               | Expose             | Page                                        | Router | Parameters | Action |
| ------------------ | ------------------ | ------------------------------------------- | ------ | ---------- | ------ |
| Company Log Screen | ./CompanyLogExpose | ./src/Expose/CompanyExpose/CompanyLogExpose | NO     | NO         | X      |

| Page                 | Expose                | Page                                           | Router | Parameters | Action |
| -------------------- | --------------------- | ---------------------------------------------- | ------ | ---------- | ------ |
| Company Admin Screen | ./CompanyReportExpose | ./src/Expose/CompanyExpose/CompanyReportExpose | NO     | NO         | X      |

| Page                 | Expose                  | Page                                             | Router | Parameters | Action |
| -------------------- | ----------------------- | ------------------------------------------------ | ------ | ---------- | ------ |
| Company Admin Screen | ./CompanySettingsExpose | ./src/Expose/CompanyExpose/CompanySettingsExpose | YES    | NO         | X      |

| Page                     | Expose                   | Page                                               | Router | Parameters | Action |
| ------------------------ | ------------------------ | -------------------------------------------------- | ------ | ---------- | ------ |
| Customer Calendar Screen | ./CustomerCalendarExpose | ./src/Expose/CustomerExpose/CustomerCalendarExpose | NO     | YES        | NO     |

| Page                 | Expose                    | Page                                                | Router | Parameters | Action |
| -------------------- | ------------------------- | --------------------------------------------------- | ------ | ---------- | ------ |
| Customer Home Screen | ./CustomerDashboardExpose | ./src/Expose/CustomerExpose/CustomerDashboardExpose | NO     | NO         | X      |

| Page                   | Expose                 | Page                                             | Router | Parameters | Action |
| ---------------------- | ---------------------- | ------------------------------------------------ | ------ | ---------- | ------ |
| Customer Folder Screen | ./CustomerFolderExpose | ./src/Expose/CustomerExpose/CustomerFolderExpose | YES    | NO         | X      |

| Page                | Expose               | Page                                           | Router | Parameters | Action |
| ------------------- | -------------------- | ---------------------------------------------- | ------ | ---------- | ------ |
| CustomerNote Screen | ./CustomerNoteExpose | ./src/Expose/CustomerExpose/CustomerNoteExpose | YES    | NO         | X      |

| Page                   | Expose                         | Page                                                                         | Router | Parameters | Action |
| ---------------------- | ------------------------------ | ---------------------------------------------------------------------------- | ------ | ---------- | ------ |
| Customer App Dashboard | ./CustomerPanelDashboardExpose | ./src/Expose/CustomerExpose/CustomerPanelExpose/CustomerPanelDashboardExpose | YES    | NO         | X |

| Page                    | Expose                    | Page                                                                    | Router | Parameters | Action |
| ----------------------- | ------------------------- | ----------------------------------------------------------------------- | ------ | ---------- | ------ |
| Customer Details Screen | ./CustomerPanelPageExpose | ./src/Expose/CustomerExpose/CustomerPanelExpose/CustomerPanelPageExpose | YES    | NO         | X      |

| Page                    | Expose                        | Page                                                                        | Router | Parameters | Action |
| ----------------------- | ----------------------------- | --------------------------------------------------------------------------- | ------ | ---------- | ------ |
| Customer Setting Screen | ./CustomerPanelSettingsExpose | ./src/Expose/CustomerExpose/CustomerPanelExpose/CustomerPanelSettingsExpose | YES    | NO         | X      |
