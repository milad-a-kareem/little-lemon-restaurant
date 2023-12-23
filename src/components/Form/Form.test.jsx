import { describe, it, expect } from "vitest";
import { render, screen } from "../../utils/test-utils";
import Form from "./Form";

describe('Footer',()=>{
    it('the text is visible', () => {
        render(<Form />)
        expect(screen.getByText('Form')).toBeInTheDocument()
      })
})