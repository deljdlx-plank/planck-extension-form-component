<?php

namespace Planck\Extension\FormComponent\View\Component;

use Phi\HTML\Element\Div;
use Phi\HTML\Element\Input;
use Phi\HTML\Element\Textarea;
use Planck\Extension\FrontVendor\Package\Cropper;
use Planck\Extension\FrontVendor\Package\FontAwesome;
use Planck\Extension\FrontVendor\Package\JQueryUI;
use Planck\Extension\FrontVendor\Package\Planck;
use Planck\Extension\FrontVendor\Package\Quill;
use Planck\Extension\FrontVendor\Package\SyntaxHighlighter;
use Planck\View\Component;

class RichTextInput extends Component
{

    /**
     * @var Div
     */
    protected $placeholder;


    /**
     * @var Textarea
     */
    protected $valueContainer;

    protected $value;

    protected $name;


    public function __construct($tagName = 'div')
    {


        $this->addFrontPackage(
            new FontAwesome()
        );

        $this->addFrontPackage(
            new Quill()
        );

        $this->addFrontPackage(
            new Cropper()
        );

        $this->addFrontPackage(
            new JQueryUI()
        );

        $this->addFrontPackage(
            new SyntaxHighlighter()
        );

        $this->addFrontPackage(
            new Planck()
        );



        parent::__construct($tagName);


        $this->dom->setAttribute('class', 'plk-component plk-rich-text-input');

        $this->placeholder = new Div();
        $this->placeholder->setAttribute('class', 'plk-rich-text-placeholder');


        $this->valueContainer = new Textarea();
        $this->valueContainer->setAttribute('class', 'plk-rich-text-value-container');

        $this->htmlValueContainer = new Textarea();
        $this->htmlValueContainer->setAttribute('class', 'plk-rich-text-html-value-container');
        $this->htmlValueContainer->css('display', 'none');
        $this->dom->addChild($this->htmlValueContainer);


        $this->dom->addChild(
            $this->placeholder
        );

        $this->dom->addChild(
            $this->valueContainer
        );

    }


    public function setName($name)
    {
        $this->name = $name;
        return $this;
    }

    public function getName()
    {
        return $this->name;
    }


    public function setValue($value)
    {
        $this->value = $value;
        return $this;
    }

    public function getValue()
    {
        return $this->value;
    }


    public function render()
    {

        /*
        $this->placeholder->html(
            $this->getValue()
        );
        */


        $this->valueContainer->html(
            htmlspecialchars($this->getValue())
        );

        $this->dom->setAttribute('data-name', $this->getName());



        return parent::render();

    }







}
