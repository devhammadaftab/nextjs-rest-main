import React, { useEffect, useState } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap'
import type { UserType } from 'interfaces'
import useSwr from 'swr'
import Link from 'next/link'
import { useStore } from 'store'
import { Endpoints } from 'constants/endpoints'
import actions from 'store/actions'
import { fetcher } from 'helper'

interface Props {}

const Home: React.FC<Props> = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { state, dispatch } = useStore();
    const { users } = state
    const { data, error } = useSwr<UserType[]>(!state.users.length ? Endpoints.USERS : "", fetcher) // Added global state to reduce the multiple api calls
    useEffect(() => {
        if (data) dispatch(actions.setUsers(data))
    },[data])

    if (error) return <div>Failed to load users</div>
    if (!users.length) return <div>Loading...</div>

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <>
            <h2>Select Actor from this dropdown</h2>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    Select Actor
                </DropdownToggle>
                <DropdownMenu>
                    {users.map((user) => (
                        <Link href={{
                            pathname: "/user",
                            query: { id: user.id }
                        }}>
                            {`User ${user.id}`}
                        </Link>
                    ))}
                </DropdownMenu>
            </Dropdown>
        </>
    )
}

export default Home
