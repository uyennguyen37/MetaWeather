import React from 'react';
import { Row, Col } from 'antd';
import WeatherCard from './WeatherCard';

const WeatherList = ({ items }) => (
  <Row justify="center" gutter={16}>
    {items.map((day) => (
      <Col span={6} key={day.id}>
        <WeatherCard day={day} />
      </Col>
    ))}
  </Row>
);

export default WeatherList;