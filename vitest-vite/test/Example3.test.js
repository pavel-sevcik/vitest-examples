import { jsx as _jsx } from "react/jsx-runtime";
import { expect, test } from 'vitest';
import renderer from 'react-test-renderer';
import Link from '@/components/Link';
function toJson(component) {
    const result = component.toJSON();
    expect(result).toBeDefined();
    expect(result).not.toBeInstanceOf(Array);
    return result;
}
test('Link changes the class when hovered', () => {
    const component = renderer.create(_jsx(Link, { page: "https://google.com", children: "Google" }));
    let tree = toJson(component);
    expect(tree).toMatchSnapshot();
    tree.props.onMouseEnter();
    tree = toJson(component);
    expect(tree).toMatchSnapshot();
    tree.props.onMouseLeave();
    tree = toJson(component);
    expect(tree).toMatchSnapshot();
});
