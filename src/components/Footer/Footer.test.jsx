import { describe, it, expect } from "vitest";
import { render, screen } from "../../utils/test-utils";
import Footer from "./Footer";

describe('Footer',()=>{
    it('the text is visible', () => {
        render(<Footer />)
        expect(screen.getByText('Footer')).toBeInTheDocument()
      })
})