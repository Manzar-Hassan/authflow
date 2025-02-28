const createRouteMatcher = (publicRoutes: string[]) => {
    return (route: string) => publicRoutes.includes(route)
}

export default createRouteMatcher