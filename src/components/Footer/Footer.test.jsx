import { describe, it, expect } from "vitest";
import { render, screen } from "../../utils/test-utils";
import Footer from "./Footer";

describe('Footer',()=>{
    it('renders copyright text', () => {
        render(<Footer />)
        expect(screen.getByText('Copyright Little Lemon Restaurant')).toBeInTheDocument()
      })
})