import { expect, test } from 'vitest'

import renderer from 'react-test-renderer'

import Link from '@/components/Link'

function toJson(component: renderer.ReactTestRenderer) {
    const result = component.toJSON()

    expect(result).toBeDefined()
    expect(result).not.toBeInstanceOf(Array)

    return result as renderer.ReactTestRendererJSON
}

test('Link changes the class when hovered', () => {
    const component = renderer.create(
        <Link page="https://google.com">Google</Link>,
    )

    let tree = toJson(component)
    expect(tree).toMatchSnapshot()

    tree.props.onMouseEnter()

    tree = toJson(component)
    expect(tree).toMatchSnapshot()

    tree.props.onMouseLeave()

    tree = toJson(component)
    expect(tree).toMatchSnapshot()
})
