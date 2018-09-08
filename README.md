# Parlay-Golfer
### The charity golf APP

# Project Requirements

This document outlines the base requirements for Project 2.

### Requirements

* Users will log in with OAUTH utilizing either google, instagram, fb

* Mobile first app

* The purpose is to run charity golfing events and distribute 
* People will participate solo, two-person teams, or foursomes representing a charity and/or non-profit
* Organize golfing event at (Harvard Gulch Golf Course)
* Facilitate event utilizing APP
* Keep Score
* Realtime score updates
* Document ball placement utilizing Golfbert API (Nice to have!)
- Longest drive
- Closest to the pin
- Longest putt
* Dispersing $$$ to charity orgs via Panda Pay API
  - Uses Charity TAX ID
  - Customizable payout schedule based on event planners feature page

### Nice to haves
* More OAUTH options
* Utilizing Twitter API via TWIT npm to create bot that automatically post when a user does some action

benjito:Parlay-Golfer benjito$ mongod
2018-09-07T09:05:02.554-0600 I CONTROL  [main] Automatically disabling TLS 1.0, to force-enable TLS 1.0 specify --sslDisabledProtocols 'none'
2018-09-07T09:05:02.603-0600 I CONTROL  [initandlisten] MongoDB starting : pid=22038 port=27017 dbpath=/data/db 64-bit host=benjito.local
2018-09-07T09:05:02.603-0600 I CONTROL  [initandlisten] db version v4.0.1
2018-09-07T09:05:02.603-0600 I CONTROL  [initandlisten] git version: 54f1582fc6eb01de4d4c42f26fc133e623f065fb
2018-09-07T09:05:02.603-0600 I CONTROL  [initandlisten] allocator: system
2018-09-07T09:05:02.603-0600 I CONTROL  [initandlisten] modules: none
2018-09-07T09:05:02.603-0600 I CONTROL  [initandlisten] build environment:
2018-09-07T09:05:02.603-0600 I CONTROL  [initandlisten]     distarch: x86_64
2018-09-07T09:05:02.603-0600 I CONTROL  [initandlisten]     target_arch: x86_64
2018-09-07T09:05:02.603-0600 I CONTROL  [initandlisten] options: {}
2018-09-07T09:05:02.605-0600 I STORAGE  [initandlisten] exception in initAndListen: IllegalOperation: Attempted to create a lock file on a read-only directory: /data/db, terminating
2018-09-07T09:05:02.605-0600 I CONTROL  [initandlisten] now exiting
2018-09-07T09:05:02.605-0600 I CONTROL  [initandlisten] shutting down with code:100