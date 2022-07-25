import React, { useEffect, useState } from 'react'
import type { UserType } from 'interfaces'
import { Dropdown, DropdownToggle, DropdownMenu, Container, Card, CardBody, CardTitle, CardHeader, CardColumns, Col, Row } from 'reactstrap'
import { useRouter } from 'next/router'
import useSwr from 'swr'
import { fetcher } from 'helper'
import { Endpoints } from 'constants/endpoints'
import { useStore } from 'store'
import actions from 'store/actions'

interface Props {}

const User: React.FC<Props> = () => {
  const { state, dispatch } = useStore();
  const { selectedFilm } = state;
  const router = useRouter()
  const selectedFilmId = Number(router.query.id) === selectedFilm?.id ? null : Number(router.query.id)
  console.log("selectedFilmId: ", selectedFilmId, router)
  const { data, error } = useSwr<UserType>(
    selectedFilmId ? Endpoints.FILM + `?id=${selectedFilmId}` : null,
    fetcher
  )
  useEffect(() => {
    if(data) {
      dispatch(actions.setSelectedFilm(data))
    }
  },[data])

  console.log('selectedFilm: ', selectedFilm);

  if (error) return <div>Failed to load user</div>
  if (!selectedFilm) return <div>Loading...</div>

  return <Container>
    <Card>
      <CardHeader>
        {selectedFilm.title}
      </CardHeader>
      <CardBody>
        <Row>
          <Col>
            Director:
          </Col>
          <Col>
            {selectedFilm.director}
          </Col>
        </Row>
        <Row>
          <Col>
            Producer:
          </Col>
          <Col>
            {selectedFilm.producer}
          </Col>
        </Row>
        <Row>
          <Col>
            Release Date:
          </Col>
          <Col>
            {selectedFilm.release_date}
          </Col>
        </Row>
        <Row>
          <Col>
            On Platform From:
          </Col>
          <Col>
            {selectedFilm.created.split("T")[0]}
          </Col>
        </Row>
      </CardBody>
    </Card>
  </Container>
}

export default User
