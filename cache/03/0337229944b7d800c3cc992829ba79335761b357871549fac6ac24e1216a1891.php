<?php

/* base.html.twig */
class __TwigTemplate_5f49f05c19ed8a30d2323c5873582f1808f04a6fd64f4e6e61a48005de0bcb7a extends Twig_Template
{
    private $source;

    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = array(
            'title' => array($this, 'block_title'),
            'stylesheets' => array($this, 'block_stylesheets'),
            'body' => array($this, 'block_body'),
            'javascripts' => array($this, 'block_javascripts'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<html>
<head>
    <title>";
        // line 3
        $this->displayBlock('title', $context, $blocks);
        echo "KODERZ</title>
    ";
        // line 4
        $this->displayBlock('stylesheets', $context, $blocks);
        // line 5
        echo "</head>
<body>
";
        // line 7
        $this->displayBlock('body', $context, $blocks);
        // line 8
        $this->displayBlock('javascripts', $context, $blocks);
        // line 9
        echo "</body>
</html>";
    }

    // line 3
    public function block_title($context, array $blocks = array())
    {
    }

    // line 4
    public function block_stylesheets($context, array $blocks = array())
    {
    }

    // line 7
    public function block_body($context, array $blocks = array())
    {
    }

    // line 8
    public function block_javascripts($context, array $blocks = array())
    {
    }

    public function getTemplateName()
    {
        return "base.html.twig";
    }

    public function getDebugInfo()
    {
        return array (  65 => 8,  60 => 7,  55 => 4,  50 => 3,  45 => 9,  43 => 8,  41 => 7,  37 => 5,  35 => 4,  31 => 3,  27 => 1,);
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "base.html.twig", "C:\\PLIKI\\repository\\rankme-webpanel\\template\\base.html.twig");
    }
}
