import React, { useEffect, useState } from 'react'
import type { UserType } from 'interfaces'
import { Dropdown, DropdownToggle, DropdownMenu, Container, Card, CardBody, CardTitle, CardHeader, CardColumns, Col, Row } from 'reactstrap'
import { useRouter } from 'next/router'
import useSwr from 'swr'
import { fetcher } from 'helper'
import { Endpoints } from 'constants/endpoints'
import { useStore } from 'store'
import actions from 'store/actions'
import Link from 'next/link'

interface Props {}

const User: React.FC<Props> = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { state, dispatch } = useStore();
  const { selectedUser } = state;
  const router = useRouter()
  const selectedUserId = Number(router.query.id) === selectedUser?.id ? null : Number(router.query.id)
  const { data, error } = useSwr<UserType>(
    selectedUserId ? Endpoints.PEOPLE + `?id=${selectedUserId}` : null,
    fetcher
  )
  useEffect(() => {
    if(data) {
      dispatch(actions.setSelectedUser(data))
    }
  },[data])

  if (error) return <div>Failed to load user</div>
  if (!selectedUser) return <div>Loading...</div>

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return <Container>
    <Card>
      <CardHeader>
        {selectedUser.name}
      </CardHeader>
      <CardBody>
        <Row>
          <Col>
            Name:
          </Col>
          <Col>
            {selectedUser.name}
          </Col>
        </Row>
        <Row>
          <Col>
            Gender:
          </Col>
          <Col>
            {selectedUser.gender}
          </Col>
        </Row>
        <Row>
          <Col>
            Mass:
          </Col>
          <Col>
            {selectedUser.mass}
          </Col>
        </Row>
        <Row>
          <Col>
            Films:
          </Col>
          <Col>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret>
                Select Film
              </DropdownToggle>
              <DropdownMenu>
                {selectedUser.films.map(film => {
                  let endpointLength = film.split("/").length
                  let filmId = film.split("/")[endpointLength - 2]
                  return <Link key={filmId} href={{
                    pathname: "/film",
                    query: { id: filmId }
                  }}>
                    {`Film ${filmId}`}
                  </Link>
                })}
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
      </CardBody>
    </Card>
  </Container>
}

export default User
