<template>
    <vir-row class="row-bg" tag="ul">
      <vir-col :span="6" tag="li"><div class="grid-content bg-purple" /></vir-col>
      <vir-col :span="6"><div class="grid-content bg-purple-light" /></vir-col>
      <vir-col :span="6"><div class="grid-content bg-purple" /></vir-col>
    </vir-row>
    <vir-row class="row-bg" justify="center">
      <vir-col :span="6"><div class="grid-content bg-purple" /></vir-col>
      <vir-col :span="6"><div class="grid-content bg-purple-light" /></vir-col>
      <vir-col :span="6"><div class="grid-content bg-purple" /></vir-col>
    </vir-row>
    <vir-row class="row-bg" justify="end">
      <vir-col :span="6"><div class="grid-content bg-purple" /></vir-col>
      <vir-col :span="6"><div class="grid-content bg-purple-light" /></vir-col>
      <vir-col :span="6"><div class="grid-content bg-purple" /></vir-col>
    </vir-row>
    <vir-row class="row-bg" justify="space-between">
      <vir-col :span="6"><div class="grid-content bg-purple" /></vir-col>
      <vir-col :span="6"><div class="grid-content bg-purple-light" /></vir-col>
      <vir-col :span="6"><div class="grid-content bg-purple" /></vir-col>
    </vir-row>
    <vir-row class="row-bg" justify="space-around">
      <vir-col :span="6"><div class="grid-content bg-purple" /></vir-col>
      <vir-col :span="6"><div class="grid-content bg-purple-light" /></vir-col>
      <vir-col :span="6"><div class="grid-content bg-purple" /></vir-col>
    </vir-row>
    <vir-row class="row-bg" justify="space-evenly">
      <vir-col :span="6"><div class="grid-content bg-purple" /></vir-col>
      <vir-col :span="6"><div class="grid-content bg-purple-light" /></vir-col>
      <vir-col :span="6"><div class="grid-content bg-purple" /></vir-col>
    </vir-row>
  </template>
  <style>
    .row-bg {
      background-color: #f9fafc;
    }
  </style>
  <script setup lang="ts"></script>
  
  